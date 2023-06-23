// ** React Imports
import { ReactNode } from 'react'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Component Import
import Error401 from 'src/pages/401'

const ErrorPage = () => <Error401 />

ErrorPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default ErrorPage
