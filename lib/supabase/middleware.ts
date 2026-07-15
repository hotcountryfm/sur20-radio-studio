import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";


export async function updateSession(request: NextRequest) {

  let response = NextResponse.next({
    request,
  });



  const supabase = createServerClient(

    process.env.NEXT_PUBLIC_SUPABASE_URL!,

    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,

    {

      cookies: {

        get(name) {

          return request.cookies.get(name)?.value;

        },


        set(name, value, options) {

          response.cookies.set({

            name,

            value,

            ...options,

          });

        },


        remove(name, options) {

          response.cookies.set({

            name,

            value: "",

            ...options,

          });

        },

      },

    }

  );



  const {
    data: {
      user,
    },
  } = await supabase.auth.getUser();



  const pathname = request.nextUrl.pathname;



  if (
    pathname.startsWith("/admin") &&
    !user
  ) {

    return NextResponse.redirect(
      new URL("/login", request.url)
    );

  }



  return response;

}