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
        <h2 className="user-content__config-title">Настройка</h2>
        <div className="user-content__config-block">
            <div className="config-block__parameter">
                {inputsInfo.map((input) => {
                    return (
                        <UserParameter
                            parameterTitle={input.parameterTitle}
                            placeholderForOld={input.placeholderForOld}
                            placeholderForNew={input.placeholderForNew}
                            type={input.type}
                            valueOld={input.valueOfInputOld.value}
                            valueNew={input.valueOfInputNew.value}
                            onChangeForOld={input.valueOfInputOld.onChange}
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
