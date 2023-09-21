'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    import('preline')
  }, [])

  return (
    <div className="bg-white flex min-h-screen items-center py-16">
      <main className="w-full max-w-md mx-auto p-6">
        <div class="w-full h-full bg-[#F4F5F6] fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto flex justify-center items-center">
          <div class="mt-7 duration-500 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
            <div class="relative flex flex-col bg-white shadow-sm rounded-xl border">
              <div class="p-4 sm:p-10 text-center overflow-y-auto">
                {/* <!-- Icon --> */}
                <span class="mb-4 inline-flex justify-center items-center w-[76px] h-[76px] rounded-full bg-primary text-5xl">
                  ✉️
                </span>
                {/* <!-- End Icon --> */}

                <h3 class="mb-2 text-xl font-bold text-gray-800">
                  Account successfully created!
                </h3>
                <p class="text-gray-500">
                  A verification link hase been sent to example@gmail.com
                </p>

                <div class="mt-6 flex justify-center gap-x-4">
                  <button type="button" class="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-secondary text-primary align-middle hover:bg-gray-50 transition-all text-sm">
                    Resend
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
