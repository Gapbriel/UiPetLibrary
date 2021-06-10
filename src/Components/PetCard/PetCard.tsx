import {pet}  from '../../Services/types'

type PropsPet = {
    pet: pet
}

function PetCard({ pet }: PropsPet) {
    return (
        <div className="petCard">
            {
                <label key={pet.id}>
                    {pet.name}-{pet.id}
                </label>
            }
        </div>
    );
}

export default PetCard;