import React from "react";
import BaseSettings from "../../containers/Settings";

export const ContentSetting=({onClick, show, isCloses})=>{
    return(
        <>
            <BaseSettings show={show} isCloses={isCloses}>
                <div>
                    Hello
                </div>
            </BaseSettings>
        </>
    )
}