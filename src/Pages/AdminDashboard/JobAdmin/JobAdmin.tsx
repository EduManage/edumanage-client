import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useTitle } from "../../../hooks/useTitle";
import { Input } from "../../StyleComponent/Input.styled";
import { Label } from "../../StyleComponent/Label.styled";
import { Textarea } from "../../StyleComponent/Textarea.styled";
import DashboardTopHeader from "../DashboardTopHeader/DashboardTopHeader";

const JobAdmin = () => {
  useTitle("Add Job");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
    setLoading(true);
    fetch(`http://localhost:5000/addjob`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.acknowledged) {
          toast.success("Add Job Successful");
          reset();
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Job Add Fail");
        setLoading(false);
      });
  };
  return (
    <div className="pt-20">
      <DashboardTopHeader name="Job" title="Add New Job"></DashboardTopHeader>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="px-5 py-10 bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative px-4 my-6">
            <Label htmlFor="">
              Job title <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Enter Job title"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 text-left block text-bold">
                title is required
              </span>
            )}
          </div>

          <div className="relative px-4 my-6">
            <Label htmlFor="">
              Job Name <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Enter Job Name"
              {...register("jovname", { required: true })}
            />
            {errors.jovname && (
              <span className="text-red-500 text-left block text-bold">
                job Name is required
              </span>
            )}
          </div>
          <div className="relative px-4 my-6">
            <Label htmlFor="">
              Address <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Enter Address Name"
              {...register("address", { required: true })}
            />
            {errors.address && (
              <span className="text-red-500 text-left block text-bold">
                Address is required
              </span>
            )}
          </div>
          <div className="relative px-4 my-6">
            <Label htmlFor="">
              Time <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Time"
              {...register("time", { required: true })}
            />
            {errors.time && (
              <span className="text-red-500 text-left block text-bold">
                Time is required
              </span>
            )}
          </div>

          <div className="relative px-4 my-6">
            <Label htmlFor="">
              Department <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Department"
              {...register("department", { required: true })}
            />
            {errors.department && (
              <span className="text-red-500 text-left block text-bold">
                Departmant number is required
              </span>
            )}
          </div>
          <div className="relative px-4 my-6">
            <Label htmlFor="">
              Company<span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Enter Company"
              {...register("company", { required: true })}
            />
            {errors.company && (
              <span className="text-red-500 text-left block text-bold">
                Company Name is required
              </span>
            )}
          </div>

          <div className="relative px-4 my-6">
            <Label htmlFor="">
              Additional <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Enter Additional"
              {...register("Additional", { required: true })}
            />
            {errors.Additional && (
              <span className="text-red-500 text-left block text-bold">
                Additional is required
              </span>
            )}
          </div>
          <div className="relative px-4 my-6">
            <Label htmlFor="">
              Employee <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Enter Employee"
              {...register("Employee", { required: true })}
            />
            {errors.Employee && (
              <span className="text-red-500 text-left block text-bold">
                Employee is required
              </span>
            )}
          </div>
          <div className="relative px-4 my-6">
            <Label htmlFor="">
              Learning <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Enter Learning"
              {...register("Learning", { required: true })}
            />
            {errors.Learning && (
              <span className="text-red-500 text-left block text-bold">
                Learning is required
              </span>
            )}
          </div>
          <div className="relative px-4 my-6">
            <Label htmlFor="">
              Part of work <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Enter health"
              {...register("health", { required: true })}
            />
            {errors.health && (
              <span className="text-red-500 text-left block text-bold">
                Part of work is required
              </span>
            )}
          </div>
          <div className="relative px-4 my-6">
            <Label htmlFor="">
              Jovdescription <span className="text-red-500">*</span>
            </Label>
            <Textarea
              {...register("jovdescription")}
              placeholder="jovdescription"
            ></Textarea>
            {errors.jovdescription && (
              <span className="text-red-500 text-left block text-bold">
                jovdescription Address is required
              </span>
            )}
          </div>
          <div className="relative px-4 my-6">
            <Label htmlFor="">
              Responsibilities <span className="text-red-500">*</span>
            </Label>
            <Textarea
              {...register("Responsibilities")}
              placeholder="Responsibilities"
            ></Textarea>
            {errors.Responsibilities && (
              <span className="text-red-500 text-left block text-bold">
                Responsibilities is required
              </span>
            )}
          </div>
          <div className="relative px-4 my-6">
            <Label htmlFor="">
              Qualifications <span className="text-red-500">*</span>
            </Label>
            <Textarea
              {...register("Qualifications")}
              placeholder="Qualifications"
            ></Textarea>
            {errors.Qualifications && (
              <span className="text-red-500 text-left block text-bold">
                Qualifications is required
              </span>
            )}
          </div>
        </div>
        <div className="form-button">
          <button className="save-btn pr-3" disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </button>
          <button className="reset-btn" onClick={() => reset()}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobAdmin;
