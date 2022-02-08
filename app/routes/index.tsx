import { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return { title: "PizzaFahrer" };
};

export default function Index() {
  return (
    <div className="p-8 mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
      <h1 className="text-center text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
         {'🚗💨 Pizza'}
        <span className="text-red-600">Fahrer</span>
      </h1>
    </div>
  );
}
