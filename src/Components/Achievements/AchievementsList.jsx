import React, { lazy, useState } from 'react';

const Modal = lazy(() => import('@Components/Modal'));
const AchievementCard = lazy(() => import('@Components/AchievementCard'));
const Button = lazy(() => import('@Components/Button'));

export default function AchievementsList({ achievement}) {
    const [openModal, setOpenModal] = useState(false)
    const onHandleButton = () => setOpenModal(!openModal)
    const {name,Title,otorged_by,logo,image} = achievement
    return (        
        <div>
            <img src={logo} alt={`${name} logo`} />
            <small>
                {name}
            </small>
            <br />
            <small>
                Otorged by: {otorged_by}
            </small>
            <Button
                name={"View"}
                onHandleButton={onHandleButton}
                />
            {openModal && (
                <Modal
                    onHandleButton={onHandleButton}
                >
                    <AchievementCard 
                        image={image}
                        name={name}                        
                    />
                </Modal>
            )}
        </div>
    )
}
