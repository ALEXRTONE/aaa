import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

interface IPrice {
    plan: string,
    precio: number,
    meses: number,
    filtros: string,
    acceso: string,
    soporte?: boolean,
    link: string
}

export function PriceCard(props: IPrice) {
  return (
    <Card className="max-w-sm dark:bg-[#ffffffe6] border-l shadow-lg" style={{border: 'transparent'}}>
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-500">Plan {props.plan}</h5>
      <div className="flex items-baseline text-gray-900 dark:text-dark">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-bold tracking-tight">{props.precio}</span>
        <span className="ml-1 text-xl font-normal text-gray-600 dark:text-gray-600">mxn/mes</span>
      </div>
      <ul className="my-7 space-y-5">
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-500">{props.meses} meses de datos históricos.</span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-500">
            Filtros {props.filtros} por Commodity.
          </span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-500">Acceso {props.acceso} a gráficas.</span>
        </li>
        { props.soporte ? <li className="flex space-x-3 decoration-gray-500">
          <svg
            className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">Soporte prioritario</span>
        </li> : <></>}
      </ul>
      <Link to={props.link}>
        <button
            type="button"
            className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
        >
            Escoger plan
        </button>
      </Link>
    </Card>
  );
}

export default PriceCard
