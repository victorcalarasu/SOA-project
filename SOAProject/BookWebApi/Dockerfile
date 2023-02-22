#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["BookWebApi/BookWebApi.csproj", "BookWebApi/"]
RUN dotnet restore "BookWebApi/BookWebApi.csproj"
COPY . .
WORKDIR "/src/BookWebApi"
RUN dotnet build "BookWebApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BookWebApi.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BookWebApi.dll"]