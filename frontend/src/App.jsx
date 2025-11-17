
import './App.css'
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'

function App() {
  return (
    <>
      <h1>Welcome to Interview Prep</h1>
      <SignedOut>
        <SignInButton/>
      </SignedOut>
      <SignedIn>
        <SignOutButton/>
      </SignedIn>
      <UserButton/>
    </>
  )
}

export default App
