
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Calendar, Users, Home } from 'lucide-react';

const schema = yup.object().shape({
  name: yup.string().required('Name is required').matches(/^[a-zA-Z\s]+$/, "Name should only contain letters"),
  email: yup.string().required('Email is required').email('Please enter a valid email address'),
  phone: yup.string().required('Phone is required').matches(/^[0-9+\s-]+$/, "Phone number should only contain numbers"),
  idNumber: yup.string().required('ID number is required').matches(/^[0-9]+$/, "ID number should only contain numbers"),
  gender: yup.string().required('Gender is required'),
  roomType: yup.string().required('Room type is required'),
  startDate: yup.date().required('Start date is required'),
  endDate: yup.date()
    .required('End date is required')
    .min(yup.ref('startDate'), 'End date must be after start date')
    .test('november-cutoff', 'End date cannot be after November 30th', (value) => {
      if (!value) return true;
      const date = new Date(value);
      return !(date.getMonth() === 10 && date.getDate() > 30);
    }),
});

type FormData = yup.InferType<typeof schema>;

const BookingForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert('Thank you for your booking request! We will contact you soon to confirm your reservation.');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-montana-card2 p-6 rounded-lg shadow-md">
      <h3 className="text-3xl font-bold mb-8 text-montana-accent">Book Your Stay</h3>
      
      <div>
        <label htmlFor="name" className="block mb-2 font-medium">Full Name</label>
        <input
          id="name"
          {...register('name')}
          className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-montana-secondary text-black bg-white`}
        />
        {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>}
      </div>
      
      <div>
        <label htmlFor="email" className="block mb-2 font-medium">Email</label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-montana-secondary text-black bg-white`}
        />
        {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>}
      </div>
      
      <div>
        <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
        <input
          id="phone"
          {...register('phone')}
          className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-montana-secondary text-black bg-white`}
        />
        {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>}
      </div>
      
      <div>
        <label htmlFor="idNumber" className="block mb-2 font-medium">ID Number</label>
        <input
          id="idNumber"
          {...register('idNumber')}
          className={`w-full px-4 py-3 border ${errors.idNumber ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-montana-secondary text-black bg-white`}
        />
        {errors.idNumber && <p className="mt-1 text-red-500 text-sm">{errors.idNumber.message}</p>}
      </div>
      
      <div>
        <label htmlFor="gender" className="block mb-2 font-medium">Gender</label>
        <select
          id="gender"
          {...register('gender')}
          className={`w-full px-4 py-3 border ${errors.gender ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-montana-secondary text-black bg-white`}
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <p className="mt-1 text-red-500 text-sm">{errors.gender.message}</p>}
      </div>
      
      <div>
        <label htmlFor="roomType" className="block mb-2 font-medium">Room Type</label>
        <div className="relative">
          <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <select
            id="roomType"
            {...register('roomType')}
            className={`w-full pl-10 pr-4 py-3 border ${errors.roomType ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-montana-secondary text-black bg-white appearance-none`}
          >
            <option value="">Select a room type</option>
            <option value="single">Single Room</option>
            <option value="double">Double Room</option>
          </select>
        </div>
        {errors.roomType && <p className="mt-1 text-red-500 text-sm">{errors.roomType.message}</p>}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="startDate" className="block mb-2 font-medium">Start Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="startDate"
              type="date"
              {...register('startDate')}
              className={`w-full pl-10 pr-4 py-3 border ${errors.startDate ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-montana-secondary text-black bg-white`}
            />
          </div>
          {errors.startDate && <p className="mt-1 text-red-500 text-sm">{errors.startDate.message}</p>}
        </div>
        
        <div>
          <label htmlFor="endDate" className="block mb-2 font-medium">End Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="endDate"
              type="date"
              {...register('endDate')}
              className={`w-full pl-10 pr-4 py-3 border ${errors.endDate ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-montana-secondary text-black bg-white`}
            />
          </div>
          {errors.endDate && <p className="mt-1 text-red-500 text-sm">{errors.endDate.message}</p>}
        </div>
      </div>
      
      <button 
        type="submit" 
        className="btn btn-secondary w-full mt-6"
      >
        Book Accommodation
      </button>
    </form>
  );
};

export default BookingForm;
