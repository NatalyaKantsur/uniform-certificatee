import { UniformAppProps } from '@uniformdev/context-next';
import { UniformContext } from '@uniformdev/context-react';
import type { RootComponentInstance } from '@uniformdev/canvas';

import createUniformContext from '@/context/createUniformContext';

import '@/canvas';
import FakeCartContextProvider from '@/modules/fake-cart/FakeCartProvider';

import '@/styles/globals.scss';

const clientContext = createUniformContext();

const App = ({
  Component,
  pageProps,
  serverUniformContext,
}: UniformAppProps<{ data: RootComponentInstance; context: unknown }>) => (
    <UniformContext context={serverUniformContext ?? clientContext}>
      <Component {...pageProps} providers={FakeCartContextProvider} />
    </UniformContext>
)

export default App;
