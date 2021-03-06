import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react"

export const Chakra = ({ children, cookies }) => {
  return (
    <ChakraProvider
      colorModeManager={
        cookies ? cookieStorageManager(cookies) : localStorageManager
      }
    >
      {children}
    </ChakraProvider>
  )
}

export const getServerSideProps = ({ req }) => {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  }
}
