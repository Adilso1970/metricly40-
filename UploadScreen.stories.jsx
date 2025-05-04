import React from 'react';
import UploadScreen from './UploadScreen';

export default {
  title: 'Components/UploadScreen',
  component: UploadScreen,
  args: {
    onFileSelect: () => {},
  },
};

const Template = (args) => <UploadScreen {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithMockedFile = Template.bind({});
WithMockedFile.args = {
  onFileSelect: (file) => console.log('arquivo selecionado:', file),
};
