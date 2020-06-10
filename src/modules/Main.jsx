import React from "react";
import image from "../img/macBook.jpg";

const Main = () => {
    return (
        <main className='Main'>
            <MainContainer>content</MainContainer>
            <MainContainer>content</MainContainer>
            <MainContainer>content</MainContainer>
            <MainContainer>content</MainContainer>
        </main>
    )
}

const MainContainer = () => {
    return (
        <div className='Main__Container'>
            <div className='Main__Container__Header'>Название</div>
            <div className='Main__Container__Separator'> </div>
            <div className='Main__Container__Content'>
                <img className='Main__Container__Content_Image' src={image} alt="image not found"/>
                <div className='Main__Container__Content_Text'>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolor ducimus maiores nesciunt
                        nisi optio perspiciatis quaerat vitae. Consectetur, cum cumque earum facere fugit illum
                        molestiae quibusdam voluptatibus! Beatae, temporibus?
                    </div>
                    <div>Beatae culpa deleniti dolorum eaque error ipsam laborum neque nesciunt nisi optio possimus
                        quaerat quidem ratione, reprehenderit sapiente suscipit temporibus totam unde. Alias assumenda
                        natus nulla, perferendis quia quisquam recusandae?
                    </div>
                    <div>Debitis, dignissimos minus? Adipisci aspernatur at aut commodi, dolore doloribus ea fugiat
                        molestiae molestias non pariatur quo quod quos sapiente voluptates? Cum dolore error minima
                        necessitatibus nesciunt, quis temporibus ullam.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;