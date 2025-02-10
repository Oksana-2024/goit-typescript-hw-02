import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Header from "../Header/Header";
import { fetchImages } from "../../services/api";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import "./App.css";

export interface UrlItem {
  small: string;
  regular: string;
}
export interface User {
  name: string;
}
export interface Image {
  urls: UrlItem;
  likes: number;
  alt_description: string;
  user: User;
  id: number;
}

export interface ImageResult {
  results: Image[];
  total_pages: number;
}

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loader, setLoader] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Partial<Image> | null>(
    null
  );
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const handleSubmit = (query: string) => {
    if (query.trim()) {
      setSearch(query);
      fetchImagesData(query);
      return;
    }
  };

  const fetchImagesData = async (query: string, page = 1) => {
    try {
      setLoader(true);
      setMessageError(false);
      const { results, total_pages } = await fetchImages<ImageResult>("/search/photos", {
        query: query,
        page: page,
      });

      page === 1 ? setImages(results) : setImages(images.concat(...results));

      setLoadMore(total_pages > page);
      results.length < 1 && toast.error("Not found any matches");
    } catch (err) {
      setMessageError(true);
      console.error(err);
    } finally {
      setLoader(false);
    }
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleClick = (e: Event, item: Partial<Image>) => {
    e.preventDefault();
    openModal();
    setSelectedPhoto(item);
  };

  const onLoadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    await fetchImagesData(search, nextPage);
    setTimeout(() => {
      scrollBy({ behavior: "smooth", top: 580 });
    }, 50);
  };

  return (
    <>
      <Header>
        <SearchBar onSubmit={handleSubmit} />
      </Header>
      <main>
        <Loader visible={loader} />
        <ImageGallery images={images} onClick={handleClick} />
        <Toaster position="top-right" />
        <ImageModal
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          alt={selectedPhoto?.alt_description}
          image={selectedPhoto?.urls?.regular}
        />
        <ErrorMessage messageError={messageError} />
        {loadMore && <LoadMoreBtn onClick={onLoadMore} />}
      </main>
    </>
  );
}

export default App;
