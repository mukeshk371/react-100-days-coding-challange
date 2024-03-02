import styled from "styled-components";

export const NotFoundStyles = styled.div`
.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.2rem;
        text-align: center;
        margin-bottom: 2rem;
    }

    button {
        padding: 0.5rem 1rem;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: #0056b3;
        }
    }
}
`;