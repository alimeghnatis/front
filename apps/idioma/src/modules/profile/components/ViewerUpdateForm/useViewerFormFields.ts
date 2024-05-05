import { useMemo } from 'react'

const useViewerFormFields = (instance) => {
  const fields = useMemo(
    () => [
      {
        name    :'id',
        type    :'text',
        disabled:true,
        label   :'ID',
      },
      {
        name        :'firstName',
        type        :'text',
        label       :'First Name',
        autoComplete:'first-name',
        // disabled    :instance.isDefault,
        description :'The first name of the user.',
        /*
        registerProps:{
          required:{
            value  :true,
            message:'A board name is required',
          },
          minLength:{
            value  :5,
            message:'Board name must be at least 5 characters',
          },
          maxLength:{
            value  :50,
            message:'Board name must be at most 50 characters',
          },
        },
        */
      },
      {
        name        :'lastName',
        type        :'text',
        label       :'Last Name',
        autoComplete:'last-name',
        description :'The last name of the user.',
      },
      {
        name        :'email',
        type        :'email',
        label       :'Email',
        autoComplete:'email',
        description :'The email of the user. This needs to be a valid Google account',
        disabled    :true,
      },
      {
        name         :'isSuperuser',
        type         :'checkbox',
        label        :'Superuser',
        description  :'Whether this user is a superuser.',
        disabled     :true,
        registerProps:{ required: { value: false } },
      },
      {
        name         :'profilePicture',
        type         :'url',
        label        :'Profile Picture',
        description  :'The profile picture of the user.',
        disabled     :true,
        registerProps:{ required: { value: false } },
      },
      {
        name         :'created',
        type         :'datetime',
        label        :'Created',
        description  :'The date and time this user was created.',
        disabled     :true,
        registerProps:{ required: { value: false } },
      },
      {
        name         :'updated',
        type         :'datetime',
        label        :'Updated',
        description  :'The date and time this user was last updated.',
        disabled     :true,
        registerProps:{ required: { value: false } },
      },
    ],
    [],
  )

  return fields
}

export default useViewerFormFields
