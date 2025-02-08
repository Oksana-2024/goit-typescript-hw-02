type Props = {
  messageError: string;
};

const ErrorMessage = ({ messageError }: Props) => {
  return (
    <div>
      {messageError && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
    </div>
  );
};

export default ErrorMessage;
