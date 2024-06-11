interface LockProps {
  className?: string
}

const Lock: React.FC<LockProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 20 20"
    className={className ?? ""}
  >
    <path
      d="M16.2 6.2h-2.5V4.4C13.7 2.3 12 .6 9.9.6S6.2 2.3 6.2 4.4v1.9H3.8c-.7 0-1.2.6-1.2 1.2v8.8c0 .7.6 1.2 1.2 1.2h12.5c.7 0 1.2-.6 1.2-1.2V7.5c0-.7-.6-1.3-1.3-1.3zM10 12.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm2.5-6.6h-5V4.4C7.5 3 8.6 1.9 10 1.9s2.5 1.1 2.5 2.5v1.8z"
      fill="currentColor"
    ></path>
  </svg>
)

export default Lock
