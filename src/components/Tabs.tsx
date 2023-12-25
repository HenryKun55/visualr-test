export const Tabs = () => {
  return (
    <div className="text-sm font-semibold text-white border-b border-[#393C49] pb-[13px]">
      <ul className="flex flex-wrap gap-8 -mb-px">
        <li className="group relative transition-all">
          <a href="/" className="text-custom-orange-primary hover:opacity-85 transition-all" aria-current="page">
            Hot Dishes
          </a>
          <div className="absolute -bottom-[14px] w-6/12 h-[3px] bg-custom-orange-primary group-hover:opacity-85 rounded-md transition-all" />
        </li>
        <li className="group relative transition-all">
          <a href="/" className="hover:text-custom-gray-light transition-all">
            Cold Dishes
          </a>
          <div className="absolute -bottom-[14px] w-6/12 h-[3px] group-hover:bg-custom-gray-light rounded-md transition-all" />
        </li>
      </ul>
    </div>
  )
}

