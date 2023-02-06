import React, { useState } from 'react';
import { Modal } from '../Modal';
import { AchievementCard } from '../AchievementCard';
import { Button } from '../Button'

export function AchievementsList({ achievement}) {
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
