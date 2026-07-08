import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
    ownerName: { 
        type: String, 
        default: "Not Provided" 
    },
    whatsappNumber: { 
        type: String, 
        required: true 
    },
    restaurantName: { 
        type: String, 
        default: "Pending Verification" 
    },
    capturedAt: { 
        type: Date, 
        default: Date.now 
    }
});

export const Lead = mongoose.model('Lead', leadSchema);