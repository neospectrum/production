import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EditableProfileCardHeader } from './EditableProfileCardHeader';

export default {
    title: 'features/EditableProfileCard/EditableProfileCardHeaderr',
    component: EditableProfileCardHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCardHeader>;

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => (
    <EditableProfileCardHeader {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
