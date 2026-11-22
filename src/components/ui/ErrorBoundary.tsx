import { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an unhandled error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[300px] flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-black/10 shadow-lg space-y-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-[#121214]">
                Something interrupted this view
              </h3>
              <p className="text-xs text-[#5C5C66] mt-1 font-body">
                The component encountered an unexpected error, but the rest of the application remains intact.
              </p>
            </div>
            <button
              onClick={this.handleReset}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#121214] text-white hover:bg-black/85 text-xs font-mono-tech transition-colors shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span>Reload Section</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
