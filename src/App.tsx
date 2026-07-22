import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
const NotFound = () => <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#000',color:'#fff',fontFamily:'monospace',flexDirection:'column'}}><h1 style={{fontSize:'4rem',margin:0}}>404</h1><p style={{color:'#888'}}>Page not found</p></div>;
import { Route, Switch, Router as WouterRouter } from 'wouter';
import BrainAgentPage from '@/pages/BrainAgentPage';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={BrainAgentPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
