import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { AppLink } from './AppLink';
import { Theme } from '@/shared/constants/theme';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: 'AppLink',
        children: 'AppLink',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    theme: 'primary',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    theme: 'primary',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});
Secondary.args = {
    theme: 'secondary',
};
export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    theme: 'secondary',
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
