import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useStore from "../../store";
import { IGame } from "../../store/types";

const AddgamePage = () => {
  const { register, handleSubmit } = useForm();
  const store = useStore();

  const submitForm = (data: IGame) => {
    console.log(data)
    store.addGame(data);
    toast.success(`Game ${data.title} added!`, {
      position: "top-right",
    });
  }

  return (
    <>
      <section className="bg-ct-blue-600 min-h-screen pt-20">
        <div>
          <p>
            Add new game here, fill data
          </p>
          <p>
            <form onSubmit={handleSubmit(submitForm)}>
              <div>
                <label htmlFor='title'>Title</label>
                <input
                  type='text'
                  {...register('title')}
                  required
                />
              </div>
              <div >
                <label htmlFor='year'>Year</label>
                <input
                  type='number'
                  {...register('year')}
                />
              </div>
              <div >
                <label htmlFor='description'>Description</label>
                <input
                  type='text'
                  className='form-input'
                  {...register('description')}
                />
              </div>
              <div>
                <label htmlFor='url'>Url</label>
                <input
                  type='url'
                  className='form-input'
                  {...register('url')}
                />
              </div>
              <button type='submit' className='button'>
                Add game to database
              </button>
            </form>
          </p>
        </div>
      </section>
    </>
  );
};

export default AddgamePage;