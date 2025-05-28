import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    docId: { type: mongoose.Schema.Types.ObjectId, ref: 'doctor', required: true },
    slotDate: { type: String, required: true },
    slotTime: { type: String, required: true },
    userData: {
        name: String,
        image: String,
        age: String,
    },
    docData: { type: mongoose.Schema.Types.ObjectId, ref: 'doctor' }, // ✅ Reference added
    amount: Number,
    cancelled: { type: Boolean, default: false },
    payment: { type: Boolean, default: false },
    isCompleted: { type: Boolean, default: false }
});




// module.exports = mongoose.model("appointments", appointmentSchema);

const appointmentModel=mongoose.models.appointment || mongoose.model("appointment",appointmentSchema);
export default appointmentModel;