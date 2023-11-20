import { useState } from 'react';
import { EXAMPLES } from "../../data";
import TabButton from "../UI/TabButton.jsx";
import Section from './Section';
import Tabs from '../UI/Tabs';


export default function Examples(props) {
    const [selected_topic, setSelectedTopic] = useState();
    let tab_content = <p>Please select a topic</p>;

    if (selected_topic) {
        tab_content = (<div id="tab-content">
            <h3>{EXAMPLES[selected_topic].title}</h3>
            <p>{EXAMPLES[selected_topic].description}</p>
            <pre>
                <code>
                    {EXAMPLES[selected_topic].code}
                </code>
            </pre>
        </div>);
    };

    function handleSelect(selectedButton) {

        console.log(selectedButton);
        setSelectedTopic(selectedButton);
    };



    return (
        <Section title="Examples" id="examples">
            <Tabs 
                buttonsContainer="menu"
                buttons={<>
                <TabButton isSelected={selected_topic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={selected_topic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selected_topic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selected_topic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
            </>
            }>
                {tab_content}
            </Tabs>
        </Section>
    );
}



