export default function ScrollToBottomButton() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={scrollToBottom} className="scroll-to-bottom-button">
      Scroll To Bottom
    </button>
  );
}
