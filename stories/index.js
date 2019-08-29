import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import Index from '../pages/index'
import Page from '../components/page'
import Provider from './Provider'
import configureStore from '../store'

const store = configureStore()

const withProvider = (story) => (
    <Provider store={store}>
        { story() }
    </Provider>
)

storiesOf('Index', module)
    .addDecorator(withProvider)
    .add('default', () => (
        <Index></Index>
    ))

storiesOf('Button', module)
    .add('with text', () => (
        <Button>Hello Button</Button>
    ))
    .add('with emoji', () => (
        <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
    ))
