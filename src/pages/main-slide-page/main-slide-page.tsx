import { Send, Upload } from "lucide-react";
import { useState } from "react";

function MainSlidePage() {
  const [language, setLanguage] = useState("cpp");
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1">
        {/* Task description */}
        <main className="flex-1 space-y-6 overflow-y-auto p-6">
          {/* Title */}
          <div>
            <h1 className="mb-1 font-semibold text-xl">
              Слайд 1 - Задача / ДЗ
            </h1>
            <p className="text-gray-600 text-sm">А. Командировка</p>
          </div>

          {/* Condition */}
          <section className="space-y-4 rounded-xl bg-white p-6 shadow">
            <h2 className="font-medium text-lg">Условие</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Какая радость! Родители Пети купили в командировку на целый год,
              предоставив школьнику полную свободу самому себе...
            </p>

            <div>
              <h3 className="mb-1 font-semibold text-sm">Входные данные</h3>
              <pre className="rounded border bg-gray-50 p-3 text-sm">
                3{"\n"}4 2{"\n"}1 3 5 2
              </pre>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-sm">Выходные данные</h3>
              <pre className="rounded border bg-gray-50 p-3 text-sm">
                4{"\n"}11{"\n"}2
              </pre>
            </div>
          </section>

          {/* Submit form */}
          <section className="space-y-4 rounded-xl bg-white p-6 shadow">
            <h2 className="font-medium text-lg">Отослать</h2>

            <div>
              <div className="mb-1 block text-sm">Язык</div>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full rounded border px-3 py-2 text-sm focus:ring focus:ring-blue-200"
              >
                <option value="cpp">C++</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
              </select>
            </div>

            <div>
              <div className="mb-1 block text-sm">Исходный код</div>
              <textarea
                className="h-32 w-full rounded border px-3 py-2 text-sm focus:ring focus:ring-blue-200"
                placeholder="Добавьте исходный код..."
              />
            </div>

            <div>
              <div className="mb-1 block text-sm">Прикрепить файл</div>
              <div className="flex cursor-pointer items-center gap-2 rounded border px-3 py-2 text-gray-500 text-sm hover:bg-gray-50">
                <Upload size={16} />
                <span>Выберите файл...</span>
              </div>
            </div>

            <button
              type="button"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-white shadow transition hover:bg-blue-700"
            >
              <Send size={16} />
              Отправить
            </button>
          </section>

          {/* Submissions table */}
          <section className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-4 font-medium text-lg">
              Мои посылки по данной задаче
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full rounded border border-gray-200 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border px-3 py-2 text-left">№</th>
                    <th className="border px-3 py-2 text-left">Дата</th>
                    <th className="border px-3 py-2">Язык</th>
                    <th className="border px-3 py-2">Статус</th>
                    <th className="border px-3 py-2">Тесты</th>
                    <th className="border px-3 py-2">Баллы</th>
                    <th className="border px-3 py-2">Подробнее</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border px-3 py-2">21884355</td>
                    <td className="border px-3 py-2">14.08.2023</td>
                    <td className="border px-3 py-2">C++</td>
                    <td className="border px-3 py-2 text-red-500">Ошибка</td>
                    <td className="border px-3 py-2">5 / 5</td>
                    <td className="border px-3 py-2">100</td>
                    <td className="cursor-pointer border px-3 py-2 text-blue-600">
                      Перейти
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>

        {/* Right panel (fixed) */}
        <aside className="sticky top-0 hidden h-screen w-72 border-l bg-white p-6 shadow-lg lg:block">
          <h2 className="mb-4 font-medium text-lg">Отослать</h2>
          <select className="mb-4 w-full rounded border px-3 py-2 text-sm focus:ring focus:ring-blue-200">
            <option>C++</option>
            <option>Python</option>
            <option>Java</option>
          </select>
          <button
            type="button"
            className="w-full rounded-lg bg-blue-600 py-2 text-white shadow transition hover:bg-blue-700"
          >
            Отправить
          </button>
        </aside>
      </div>
    </div>
  );
}

export default MainSlidePage;
