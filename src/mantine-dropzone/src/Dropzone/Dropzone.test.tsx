import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps } from '@mantine/tests';
import { Dropzone, DropzoneProps } from './Dropzone';

const defaultProps: DropzoneProps = {
  onDrop: () => {},
  children: () => null,
};

describe('@mantine/dropzone/Dropzone', () => {
  itSupportsSystemProps({
    component: Dropzone,
    props: defaultProps,
    displayName: '@mantine/dropzone/Dropzone',
    refType: HTMLDivElement,
  });

  it('displays LoadingOverlay based on loading prop', () => {
    const { container: loading } = render(<Dropzone {...defaultProps} loading />);
    const { container: notLoading } = render(<Dropzone {...defaultProps} loading={false} />);

    expect(loading.querySelectorAll('.mantine-LoadingOverlay-root')).toHaveLength(1);
    expect(notLoading.querySelectorAll('.mantine-LoadingOverlay-root')).toHaveLength(0);
  });

  it('assigns open function to given openRef', () => {
    const ref = React.createRef<any>();
    render(<Dropzone {...defaultProps} openRef={ref} />);
    expect(ref.current).toBeInstanceOf(Function);
  });
});