import { ChangeEvent} from 'react'

interface InputandlableType{
  lable:string,
  placeholder:string,
  onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
  type?:string
}

export const Inputandlable = ({ lable, onChange, placeholder,type }: InputandlableType) => {
  return (
    <div>
      <div className='pt-3'>
        <label className="block mb-2 text-lg font-semibold text-black">{lable}</label>
        <input type={type} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder}
          onChange={onChange}
          required />
      </div>
    </div>
  )
}
