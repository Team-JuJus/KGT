"use client";

import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <article className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <header className="mb-6 text-right">
          <h1 className="mb-5 text-3xl font-bold text-gray-800">ورود</h1>
          <p className="text-sm text-gray-600">
            برای دسترسی به پنل مدیریت، اطلاعات ورود خود را وارد کنید
          </p>
        </header>

        <form action="" className="space-y-6">
          <fieldset className="space-y-4">
            <legend className="sr-only">اطلاعات ورود</legend>

            <div>
              <label
                htmlFor="username"
                className="block text-right text-sm font-medium text-gray-700"
              >
                نام کاربری
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-left focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-right text-sm font-medium text-gray-700"
              >
                رمز عبور
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-left focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none sm:text-sm"
              />
            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
          >
            ورود به سیستم
          </button>
        </form>
      </article>
    </main>
  );
}
