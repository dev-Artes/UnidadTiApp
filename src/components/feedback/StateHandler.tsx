import { CircularProgress } from '@mui/material'

interface StateHandlerProps {
  loading: boolean
  error: string | null
  children: React.ReactNode
}

const StateHandler = ({
  loading,
  error,
  children,
}: StateHandlerProps) => {

  if (error) {
    return (
      <div className="text-red-500 font-medium">
        {error}
      </div>
    )
  }

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <CircularProgress />
      </div>
    )
  }

  return <>{children}</>
}

export default StateHandler