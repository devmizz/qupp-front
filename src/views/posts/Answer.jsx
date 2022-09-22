import { useParams } from "react-router-dom";

function Write() {

  const { id } = useParams();

  return (
    <div className="max-w-2xl mx-auto mt-3">
      <form>
        <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
                <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600 text-slate-50 text-[20px] font-bold">
                    답변하기
                </div>
            </div>
            <div className="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
                <label htmlFor="editor" className="sr-only"></label>
                <textarea id="editor" rows="8" className="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:placeholder-gray-400" placeholder="질문을 입력해주세요" required></textarea>
            </div>
        </div>
        <button 
          type="submit" 
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
            등록하기
        </button>
        </form>
    </div>
  );
}

export default Write;
