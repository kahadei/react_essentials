export default function Tabs(props) {
    const ButtonsContainer = props.buttonsContainer;
    return (
        <>
            <ButtonsContainer>
                { props.buttons}
            </ButtonsContainer>
            {props.children}
        </>
    );
}