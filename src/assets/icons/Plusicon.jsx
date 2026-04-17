const PlusIcon = (props) => (
  <svg
    className="w-3 h-3 text-gray-900 dark:text-black"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 1v16M1 9h16"
    />
  </svg>
)
export default PlusIcon
