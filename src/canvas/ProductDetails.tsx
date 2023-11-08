import { FC } from 'react';
import { UniformSlot, ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';
import BaseContainer, { Props as BaseContainerProps, ContainerVariants } from '../components/Container';
import { withoutContainer } from '../hocs/withoutContainer';

export type Props = ComponentProps<BaseContainerProps>;

const ProductDetails: FC<Props> = props => (
  <BaseContainer {...props} containerVariant={props?.component?.variant}>
    <UniformSlot name="container-inner" />
  </BaseContainer>
);

[undefined, ContainerVariants.BackgroundInContainer, ContainerVariants.FluentContent].forEach(variantId => {
  registerUniformComponent({
    type: 'productDetails',
    component: withoutContainer(ProductDetails),
    variantId,
  });
});

export default ProductDetails;
