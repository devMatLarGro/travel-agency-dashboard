import React from 'react'
// import { SfDataForm, FormValidator, DataAnnotationsValidator, FormItems, FormAutoGenerateItems } from '@syncfusion/ej2-react-dataform';
import {createTrip} from "~/routes/api/api";

const CreateTrip = () => {

    const TripDetail = {
        name: '',
        description: '',
        itinerary: [
            {
                location: '',
                date: '',
                description: '',
                imageUrls: [],
            },
        ],
        budget: '',
        tags: [],
        estimatedPrice: '',
        imageUrl: '',
        status: '',
        dateCreated: '',
        dateUpdated: '',
        dateJoined: '',
        itineraryCreated: '',
        userId: '',
    };

    createTrip();

    return (
        <div className="create-trip">
            <h2 className="new-trip">

            </h2>
        </div>
    )
}
export default CreateTrip
