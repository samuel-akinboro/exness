'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    import('preline')
  }, [])

  return (
    <div className="bg-black/90 flex min-h-screen items-center py-16">
      <main className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 border rounded-xl shadow-sm bg-black/10 border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center mb-4">
              <h1 className="block text-2xl font-bold text-white">Sign up</h1>
              <p className="mt-2 text-sm text-gray-400">
                Already have an account?
                <Link className="text-secondary decoration-2 hover:underline font-medium" href="/sign-in">
                  Sign in here
                </Link>
              </p>
            </div>

            <div className="mt-5">
              {/* <!-- Form --> */}
              <form>
                <div className="grid gap-y-4">
                  {/* <!-- Form Group --> */}
                  <div>
                    <label for="email" className="block text-sm mb-2 text-white">Full Name</label>
                    <div className="relative">
                      <input type="text" id="name" name="name" className="py-3 px-4 block w-full rounded-md text-sm focus:border-secondary focus:ring-secondary bg-[#E7F0FE] border-gray-700 text-gray-900" required aria-describedby="name-error" />
                      <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label for="email" className="block text-sm mb-2 text-white">Email address</label>
                    <div className="relative">
                      <input type="email" id="email" name="email" className="py-3 px-4 block w-full rounded-md text-sm focus:border-secondary focus:ring-secondary bg-[#E7F0FE] border-gray-700 text-gray-900" required aria-describedby="email-error" />
                      <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>
                      </div>
                    </div>
                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                  </div>
                  {/* <!-- End Form Group --> */}
{/* 
                  <!-- Form Group --> */}
                  <div>
                    <label for="password" className="block text-sm mb-2 text-white">Password</label>
                    <div className="relative">
                      <input type="password" id="password" name="password" className="py-3 px-4 block w-full rounded-md text-sm focus:border-secondary focus:ring-secondary bg-[#E7F0FE] border-gray-700 text-gray-900" required aria-describedby="password-error" />
                      <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>
                      </div>
                    </div>
                    <p className="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
                  </div>
                  {/* <!-- End Form Group --> */}

                  {/* <!-- Form Group --> */}
                  <div>
                    <label for="confirm-password" className="block text-sm mb-2 text-white">Confirm Password</label>
                    <div className="relative">
                      <input type="password" id="confirm-password" name="confirm-password" className="py-3 px-4 block w-full rounded-md text-sm focus:border-secondary focus:ring-secondary bg-[#E7F0FE] border-gray-700 text-gray-900" required aria-describedby="confirm-password-error" />
                      <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>
                      </div>
                    </div>
                    <p className="hidden text-xs text-red-600 mt-2" id="confirm-password-error">Password does not match the password</p>
                  </div>
                  {/* <!-- End Form Group --> */}

                  {/* <!-- Checkbox --> */}
                  <div className="flex items-center">
                    <div className="flex">
                      <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 rounded text-secondary pointer-events-none focus:ring-secondary bg-gray-800 border-gray-700 checked:bg-secondary checked:border-secondary focus:ring-offset-gray-800" />
                    </div>
                    <div className="ml-3">
                      <label for="remember-me" className="text-sm text-white">I accept the <a className="text-secondary decoration-2 hover:underline font-medium" href="#">Terms and Conditions</a></label>
                    </div>
                  </div>
                  {/* <!-- End Checkbox --> */}

                  <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-secondary text-black hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition-all text-sm focus:ring-offset-gray-800">Sign up</button>
                </div>
              </form>
              {/* <!-- End Form --> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
