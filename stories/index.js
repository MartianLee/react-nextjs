import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import Index from '../pages/index'
import { Provider } from 'react-redux'
import App from "next/app";

storiesOf('Button', module)
    .add('with text', () => (
        <Button>Hello Button</Button>
    ))
    .add('with emoji', () => (
        <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
    ))
    .add('Index Page', () => (
        <App> </App>
    ));