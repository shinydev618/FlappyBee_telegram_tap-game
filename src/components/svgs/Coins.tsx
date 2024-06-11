interface CoinsProps {
  className?: string
}

const Coins: React.FC<CoinsProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 28 28"
    className={className ?? ""}
  >
    <path
      fill="currentColor"
      d="M20.1 9.8v-.6c0-2.7-4.1-4.8-9.6-4.8S.9 6.4.9 9.2v4.4c0 2.3 2.9 4.1 7 4.6v.6c0 2.7 4.1 4.8 9.6 4.8s9.6-2.1 9.6-4.8v-4.4c0-2.2-2.8-4-7-4.6zm-14 6.3c-2.1-.6-3.5-1.6-3.5-2.5V12c.9.6 2.1 1.1 3.5 1.5v2.6zm8.8-2.6c1.4-.3 2.6-.9 3.5-1.5v1.5c0 .9-1.4 1.9-3.5 2.5v-2.5zm-1.8 7.8c-2.1-.6-3.5-1.6-3.5-2.5v-.5h2.1c.5.2.9.3 1.4.4v2.6zm0-4.9c-.9.1-1.7.2-2.6.2-.9 0-1.8-.1-2.6-.2v-2.6c.9.1 1.7.2 2.6.2.9 0 1.8-.1 2.6-.2v2.6zm7 5.3c-1.7.3-3.5.3-5.2 0v-2.6c.9.1 1.7.2 2.6.2.9 0 1.8-.1 2.6-.2v2.6zm5.3-2.9c0 .9-1.4 1.9-3.5 2.5v-2.6c1.4-.3 2.6-.9 3.5-1.5v1.6z"
    ></path>
  </svg>
)

export default Coins
