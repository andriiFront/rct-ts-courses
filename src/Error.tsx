import { ErrorInfo, PropsWithChildren, PureComponent } from "react";

const AppError = ({ error }: {error: Error | null}) => {
  switch(error?.cause) {
    case 500:
      return <>Backend failed</>
    default:
      return <>UI FAILED</>
  }
}

export class GlobalErrorHandler extends PureComponent<PropsWithChildren> {
  state = { hasError: false, error: null }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error}
  }

  render() {
    const { hasError, error} = this.state
    const { children } = this.props

    if(hasError) {
      return <AppError error={error} />
    }

    return children
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error)
  }
}
