let currentSearchParams = new URLSearchParams();

export const push = jest.fn((url: string) => {
  const [, query] = url.split("?");
  currentSearchParams = new URLSearchParams(query);
});

export const useRouter = () => ({
  push,
});

export const usePathname = () => "/characters";

export const useSearchParams = () => currentSearchParams;

export const setSearchParams = (params: string) => {
  currentSearchParams = new URLSearchParams(params);
};
