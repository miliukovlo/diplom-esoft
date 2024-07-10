import React from 'react';
import UserParameter from '../UserParameter/UserParameter';
import UserTheme from '../UserTheme/UserTheme';
import { UserPageInputInfoInterface } from '../../../Interfaces/UserPageInputInfoInterface';

interface UserConfigProps {
    inputsInfo: UserPageInputInfoInterface[],
    theme: string
}

const UserConfig: React.FC<UserConfigProps> = React.memo(({
    inputsInfo,
    theme
}) => {

    return (
        <div className="user-content__config">
        <h2 className={theme === 'dark' ? "user-content__config-title light-title" : "user-content__config-title dark-title"}>Настройка</h2>
        <div className="user-content__config-block">
            <div className="config-block__parameter">
                {inputsInfo.map((input) => {
                    return (
                        <UserParameter
                            key={input.id}
                            parameterTitle={input.parameterTitle}
                            placeholderForNew={input.placeholderForNew}
                            type={input.type}
                            valueNew={input.valueOfInputNew.value}
                            onChangeForNew={input.valueOfInputNew.onChange}
                            theme={theme}
                        />
                    )
                })}
                <UserTheme
                    theme={theme}
                />
            </div>
        </div>
    </div>
    );
})

export default UserConfig;
