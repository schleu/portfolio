import React from 'react';
import TelegramLoginButton2, { TelegramUser } from '@v9v/ts-react-telegram-login';
// @ts-ignore
import TelegramLoginButton from 'react-telegram-login';


const handleTelegramResponse = (user: TelegramUser) => {
    console.log(user);
};

export function TelegramPage() {
    return (
        <div className="flex flex-col gap-5 w-full h-screen bg-pink-500">
            <b>Shalom!</b>
            <br />
            <TelegramLoginButton
                dataOnauth={handleTelegramResponse}
                botName="lou_bookkeeper_dev_bot"
                usePic={false}
                cornerRadius={20}
                requestAccess="write"
            />
            <TelegramLoginButton
                dataOnauth={handleTelegramResponse}
                botName="sniper.paal.ai"
                usePic={false}
                cornerRadius={20}
                requestAccess="write"
            />
            <TelegramLoginButton
                dataOnauth={handleTelegramResponse}
                botName="OdauBot"
                usePic={false}
                cornerRadius={20}
                requestAccess="write"
            />
            <TelegramLoginButton
                dataOnauth={handleTelegramResponse}
                botName="SchleuBot"
                usePic={false}
                cornerRadius={20}
                requestAccess="write"
            />
            <TelegramLoginButton
                dataOnauth={handleTelegramResponse}
                botName="06b6-2804-214-884b-8ffe-703d-9cbc-5ee4-350b.ngrok-free.app"
                usePic={false}
                cornerRadius={20}
                requestAccess="write"
            />
            {/* Comment out or remove the other buttons for now */}
            {/* <TelegramLoginButton dataOnAuth={handleTelegramResponse} botName="OdauBot" />
            <TelegramLoginButton dataOnAuth={handleTelegramResponse} botName="SchleuBot" /> */}
        </div>
    );
}

