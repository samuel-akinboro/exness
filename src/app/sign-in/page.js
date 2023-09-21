'use client'

import { useEffect } from 'react'

export default function SignIn() {
  useEffect(() => {
    import('preline')
  }, [])

  return (
    <div className="bg-gray3 flex min-h-screen items-center py-16">
      <main className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 border rounded-xl shadow-sm bg-white">
          <div className="p-4 sm:p-7">
            <div className="text-center mb-4">
              <h1 className="block text-2xl font-bold text-black">Sign In</h1>
              <p className="mt-2 text-sm text-gray-600">
                Don't have an account?{" "}
                <a className="text-secondary decoration-2 hover:underline font-medium" href="/sign-up">
                  Sign Up here
                </a>
              </p>
            </div>

            <div className="mt-5">
              {/* <!-- Form --> */}
              <form>
                <div className="grid gap-y-4">
                  {/* <!-- Form Group --> */}
                  <div>
                    <label for="email" className="block text-sm mb-2 text-black">Email address</label>
                    <div className="relative">
                      <input type="email" id="email" name="email" className="py-3 px-4 block w-full rounded-md text-sm focus:border-secondary focus:ring-secondary border-black bg-white text-gray-900 border" required aria-describedby="email-error" />
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
                    <label for="password" className="block text-sm mb-2 text-black">Password</label>
                    <div className="relative">
                      <input type="password" id="password" name="password" className="py-3 px-4 block w-full rounded-md text-sm focus:border-secondary focus:ring-secondary bg-white border-black border text-gray-900"  required aria-describedby="password-error" />
                      <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>
                      </div>
                    </div>
                    <p className="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
                  </div>
                  {/* <!-- End Form Group --> */}

                  <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-secondary text-black hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition-all text-sm focus:ring-offset-gray-800 mt-4">Sign in</button>
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
