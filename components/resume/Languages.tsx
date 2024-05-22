export default function Languages() {
  return (
    <div className=" flex flex-col w-full">
      <div className="flex w-full justify-start ml-4 gap-4">
        <div className="flex flex-col gap-0">
          <span className="dark:text-zinc-100">English</span>
          <span className="text-[10px] italic text-gray-500">Fluent</span>
        </div>
        <div className="flex flex-col gap-0 dark:text-zinc-100">
          <span>Arabic</span>
          <span className="text-[10px] italic text-gray-500">native</span>
        </div>
      </div>
    </div>
  )
}
